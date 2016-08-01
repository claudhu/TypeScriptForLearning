// TypeScript 有三種基本的型態 分別是 布林 數值 以及字串
var isDone: boolean = false;
var lines: number = 42;
var name: string = "Anders";

// 若是不確定變數的資料型態，您可以使用Any來宣告
var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; //  程式會使用動態的方式來配合 變數

// 對於Collections的屬性來說，這裡可以以直接宣告【陣列型別】或者使用【泛型】
var list:number[] = [1,2,3]
// 您可以使用【泛型】的宣告方式來作為替代方法
var list: Array<number> = [1, 2, 3];

// 列舉的使用方式，列舉擺放的是【常數】:
enum Color {Red, Green, Blue};
var c: Color = Color.Green;

// 如果使用型別為【void】 意旨該function不存在任何回傳值
function bigHorribleAlert(): void {
  alert("I'm a little annoying box!");
}
// Function在JavaScript的世界代表著【一等公民】，支援使用Lambda的"fat arrow"語法以及使用型別介面

//以下敘述都是相同的，一樣的簽名方式將會被編譯器進行【推論式處理】，並且會產生相同JavaScript的檔案輸出

var f1 = function(i: number): number { return i * i; }
// 回傳 推論型別(意思就是不強制指定回傳的型別，由系統動態自行推論)【aka. type infered】
var f2 = function(i: number) { return i * i; }
var f3 = (i: number): number => { return i * i; }
// 回傳 推論型別
var f4 = (i: number) => { return i * i; }
// 回傳推論型別,單行無雙括弧意旨不需要使用關鍵字【return】，直接運行
var f5 = (i: number) =>  i * i;

//介面是一種結構，基於此作法所有繼承該【介面】的類別都需要完全的實做該方法
interface Person {
  name: string;
  // 可選的屬性，我們透過一個【問號】來先行標註
  age?: number;
  //必要的實做的方法
  move(): void;
}

// 物件實做【Person】介面
//當物件繼承了Person介面，就必須要實做name的屬性，以及move的方法，這樣你就可以將該列別轉換
var p: Person = { name: "Bobby", move: () => {} };
// 在介面裡頭宣告了Optional Property代表我們在實做之中可以選擇添加或者不添加，增加許多彈性的使用
var validPerson: Person = { name: "Bobby", age: 42, move: () => {} };
// 下列則會報錯，因為age是宣告為number而不是宣告為boolean 所以程式會進行報錯
var invalidPerson: Person = { name: "Bobby", age: true };

// 介面也可以描述一個Function類別
interface SearchFunc {
  (source: string, subString: string): boolean;
}
//唯獨參數類別是重要的，至於名稱為何，那並不重要不重要的
var mySearch: SearchFunc;
mySearch = function(src: string, sub: string) {
  return src.search(sub) != -1;
}

// 【預設】類別成員為"  Public  " 
class Point {
  // 屬性
  x: number;
  // 建構子，關鍵字public / private 在文本中將會自動的為屬性們產生【模板架構】，並且在建構子之中自動初始化，在下列的程式碼敘述中"y"的定義跟"x"的˙定義相同，
  //但是您可以少打一點字，因為預設值就是為public。


  constructor(x: number, public y: number = 0) {
    this.x = x;
  }

  // 涵式
  dist() { return Math.sqrt(this.x * this.x + this.y * this.y); }

  //靜態成員
  static origin = new Point(0, 0);
}

var p1 = new Point(10 ,20);
var p2 = new Point(25); //此宣告的y為0

// Inheritance
class Point3D extends Point {
  constructor(x: number, y: number, public z: number = 0) {
    super(x, y); // 明確的呼叫父建構子是在此處是相當重要的 
  }

  //覆寫
  dist() {
    var d = super.dist();
    return Math.sqrt(d * d + this.z * this.z);
  }
}

// Module 模組，可以使用"."做為分界點來代表子模組
module Geometry {
  export class Square {
    constructor(public sideLength: number = 0) {
    }
    area() {
      return Math.pow(this.sideLength, 2);
    }
  }
}

var s1 = new Geometry.Square(5);

//運用本地別名來作為參考一個模組(有點像是namespace的做法)
import G = Geometry;

var s2 = new G.Square(10);

// 泛型
// 類別
class Tuple<T1, T2> {
  constructor(public item1: T1, public item2: T2) {
  }
}

// 介面
interface Pair<T> {
  item1: T;
  item2: T;
}

// Function
var pairToTuple = function<T>(p: Pair<T>) {
  return new Tuple(p.item1, p.item2);
};

var tuple = pairToTuple({ item1:"hello", item2:"world"});

// 
//參考到一個定義檔
/// <reference path="jquery.d.ts" />

//模板字串(字串使用backticks包覆住)
//以字串模板的方式插入字串 
var name = 'Tyrone';
var greeting = `Hi ${name}, how are you?`
// Multiline Strings with Template Strings
var multiline = `This is an example
of a multiline string`;

