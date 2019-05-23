export class Subtask {
  uniqueKey: string;

  constructor(public name: string, public checked: boolean) {
    this.name = name;
    this.checked = checked;
    this.uniqueKey = this.generateKey(5);
  }

  private generateKey(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}

export class Task {
  name: string;
  progress: Subtask[];
  completed: boolean;
  percentage: number;
}
