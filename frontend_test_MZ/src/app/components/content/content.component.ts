import { Component, OnInit } from '@angular/core';
import { RadioBlockComponent } from '../blocks/radio-block/radio-block.component';
import { ActionBlockComponent } from '../blocks/action-block/action-block.component';
import { TextBlockComponent } from '../blocks/text-block/text-block.component';
import { Sentence } from '../../models/sentence.model';
import { HttpClient } from '@angular/common/http';
import { ToastService } from '../../services/toast.service';
import { LocalStorage } from '../../services/localStorage.service';

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
    private localStorage: LocalStorage
  ) {}

  private dataUrl: string = '../../../assets/data.json';
  selectedOption = -1;
  allSentences: Sentence[] = [];
  allSentencesBackup: Sentence[] = [];
  sentencesToDisplay: Sentence[] = [];
  randomMIN = 2;
  randomMAX = 0;

  ngOnInit(): void {
    this.getSentencesFromFile();
  }

  getSentencesFromFile() {
    this.http.get<Sentence[]>(this.dataUrl).subscribe((data) => {
      this.allSentences = [...data];
      this.allSentencesBackup = [...data];
      this.randomMAX = data.length - 1;

      this.localStorage.save('allSentences', this.allSentences);
      console.log(this.localStorage.getAll('allSentences'));
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
        this.allSentences = [...this.allSentencesBackup];
        this.sentencesToDisplay = this.allSentences.splice(0, 1);
        break;
      case 1:
        this.allSentences = [...this.allSentencesBackup];
        this.sentencesToDisplay = this.allSentences.splice(1, 1);
        break;
      case 2:
        this.sentencesToDisplay = [this.getRandomObject('replace')];
        break;
    }
  }

  addSentenceToList(radio: number) {
    if (this.sentencesToDisplay.length < 1) {
      switch (radio) {
        case 0:
          var sentence = this.allSentencesBackup[0];
          this.sentencesToDisplay.push(sentence);
          break;
        case 1:
          var sentence = this.allSentencesBackup[1];
          this.sentencesToDisplay.push(sentence);
          break;
        case 2:
          this.sentencesToDisplay.push(this.getRandomObject('add'));
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
              var sentence = this.allSentencesBackup[0];
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
              var sentence = this.allSentencesBackup[1];
              this.sentencesToDisplay.push(sentence);
            }
          }
          break;
        case 2:
          var randomObject = this.getRandomObject('add');
          this.sentencesToDisplay.push(randomObject);
          break;
      }
    }
  }

  getRandomObject(type: string) {
    var random = Math.floor(Math.random() * this.allSentences.length);
    if (type == 'replace') {
      var sentences = [...this.allSentencesBackup];
      return sentences[random];
    }

    if (this.allSentences.length < 1) {
      this.toastService.showError('Nie ma już więcej sentencji');
      throw new Error('Nie ma już więcej sentencji');
    }
    var randomToDelete = Math.floor(Math.random() * this.allSentences.length);
    return this.allSentences.splice(randomToDelete, 1)[0];
  }
}
