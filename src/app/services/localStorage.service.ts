import { Injectable } from '@angular/core';
import { Sentence } from '../models/sentence.model';

@Injectable({ providedIn: 'root' })
export class LocalStorage {
  constructor() {}

  public save(key: string, sentences: Sentence[]) {
    var localData = localStorage.getItem(key);
    var newData: Sentence[] = [];
    if (localData !== null) {
      newData = JSON.parse(localData);
    }
    newData.push(...sentences);
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(newData));
  }

  public get(key: string, sentenceId: number) {
    var localData = localStorage.getItem(key);
    if (localData == null) throw new Error();
    var sentences: Sentence[] = JSON.parse(localData);
    var selectedSentence = sentences.find(
      (sentence) => sentence.id == sentenceId
    );
    if (selectedSentence == null) throw new Error();
    return selectedSentence;
  }

  public getAll(key: string) {
    var localData = localStorage.getItem(key);
    if (localData == null) return [];
    var sentences: Sentence[] = JSON.parse(localData);
    return sentences;
  }

  public delete(key: string, sentenceId: number) {
    var localData = localStorage.getItem(key);
    if (localData == null) throw new Error();
    var sentences: Sentence[] = JSON.parse(localData);
    var selectedSentence = sentences.find(
      (sentence) => sentence.id == sentenceId
    );
    if (selectedSentence == null) throw new Error();
    var indexOf = sentences.indexOf(selectedSentence);
    sentences.splice(indexOf, 1);
  }

  public overwrite(key: string, sentences: Sentence[]) {
    localStorage.setItem(key, JSON.stringify(sentences));
  }
}
