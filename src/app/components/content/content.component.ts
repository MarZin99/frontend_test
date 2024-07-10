import { Component, OnInit } from '@angular/core';
import { RadioBlockComponent } from '../blocks/radio-block/radio-block.component';
import { ActionBlockComponent } from '../blocks/action-block/action-block.component';
import { TextBlockComponent } from '../blocks/text-block/text-block.component';
import { Sentence } from '../../models/sentence.model';
import { HttpClient } from '@angular/common/http';
import { ToastService } from '../../services/toast.service';
import { LocalStorage } from '../../services/localStorage.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  imports: [RadioBlockComponent, ActionBlockComponent, TextBlockComponent],
})
export class ContentComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private toastService: ToastService,
    private localStorage: LocalStorage,
    private deviceService: DeviceDetectorService
  ) {}

  private dataUrl: string = '../../../assets/data.json';
  selectedOption = -1;
  sentencesToDisplay: Sentence[] = [];
  randomMIN = 2;
  randomMAX = 0;

  ngOnInit(): void {
    this.getSentencesFromFile();
  }

  getSentencesFromFile() {
    this.http.get<Sentence[]>(this.dataUrl).subscribe((data) => {
      this.randomMAX = data.length - 1;
      this.localStorage.overwrite('allSentences', [...data]);
    });
  }

  onRadioSelect(opt: number) {
    this.selectedOption = opt;
  }

  editDisplayedArray(typeOfButton: string) {
    if (this.selectedOption == -1) {
      this.toastService.showError('Wybierz opcję!');
      throw new Error('Wybierz opcję!');
    }

    if (typeOfButton == 'replace') {
      this.replaceSentenceList(this.selectedOption);
    }
    if (typeOfButton == 'add') {
      this.addSentenceToList(this.selectedOption);
    }
  }

  replaceSentenceList(radio: number) {
    switch (radio) {
      case 0:
        this.sentencesToDisplay = [this.localStorage.get('allSentences', 1)];
        break;
      case 1:
        this.sentencesToDisplay = [this.localStorage.get('allSentences', 2)];
        break;
      case 2:
        this.sentencesToDisplay = [this.getFirstRandomObject()];
        break;
    }
  }

  addSentenceToList(radio: number) {
    if (this.sentencesToDisplay.length < 1) {
      switch (radio) {
        case 0:
          this.sentencesToDisplay.push(
            this.localStorage.get('allSentences', 1)
          );
          break;
        case 1:
          this.sentencesToDisplay.push(
            this.localStorage.get('allSentences', 2)
          );
          break;
        case 2:
          this.sentencesToDisplay.push(this.getFirstRandomObject());
          break;
      }
    } else {
      switch (radio) {
        case 0:
          {
            if (this.sentencesToDisplay.find((x) => x.id == 1)) {
              this.toastService.showError('Opcja już jest wyświetlona');
              throw new Error('Opcja już jest wyświetlona');
            } else {
              var sentence = this.localStorage.get('allSentences', 1);
              this.sentencesToDisplay.push(sentence);
            }
          }
          break;
        case 1:
          {
            if (this.sentencesToDisplay.find((x) => x.id == 2)) {
              this.toastService.showError('Opcja już jest wyświetlona');
              throw new Error('Opcja już jest wyświetlona');
            } else {
              var sentence = this.localStorage.get('allSentences', 2);
              this.sentencesToDisplay.push(sentence);
            }
          }
          break;
        case 2:
          var randomObject = this.getRandomObject();
          this.sentencesToDisplay.push(randomObject);
          break;
      }
    }
  }

  getFirstRandomObject() {
    let allSentencesLocaly = this.localStorage.getAll('allSentences');
    var random = Math.floor(Math.random() * allSentencesLocaly.length);
    return allSentencesLocaly[random];
  }

  getRandomObject() {
    let allSentencesLocaly = this.localStorage.getAll('allSentences');
    var uniqueRecords = this.findUniqueRecords(
      allSentencesLocaly,
      this.sentencesToDisplay
    );

    var random = Math.floor(Math.random() * uniqueRecords.length);

    return uniqueRecords[random];
  }

  findUniqueRecords(source: Sentence[], displayed: Sentence[]) {
    if (source.length == displayed.length) {
      this.toastService.showError('Nie ma już niepowtarzających się rekordów');
      throw new Error();
    }
    let dispplayedSentenceIDS = new Set(
      displayed.map((sentence) => sentence.id)
    );
    let uniqueRecords = source.filter(
      (sentence) => !dispplayedSentenceIDS.has(sentence.id)
    );
    return uniqueRecords;
  }

  removeSentence(sentenceId: number) {
    let index = this.sentencesToDisplay.findIndex((x) => x.id == sentenceId);

    if (index == -1) {
      this.toastService.showError('Nie znaleziono takiej sentencji');
    } else {
      this.sentencesToDisplay.splice(index, 1);
    }
  }
}
