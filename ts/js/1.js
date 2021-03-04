"use strict";
// console.log('1,ts')
// let a:string = '你好ts'
// let b:number = 111
// let arr:number[] = [1,2,3]
// let arr1:Array<string> = ['1','2']//泛
// // let arr1:Array<string> = ['1','2']
// let arr2:[string,boolean,number] = ['1',false,1] //元祖
// enum flag{success=1,error=2}
// let f:flag = flag.success
// let obj:any = document.getElementsByClassName('id')[0]
// console.log(obj,'obj')
// obj.style.color = 'red'
// let num:undefined
// let num:number|undefined
// console.log(num)
// console.log(f,'enum')
// console.log(a)
// console.log(b)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// function fun(a:number):number{
//     if(a>1){
//         return 111
//     }else{
//         return 45
//     }
// }
// let c:undefined
// c = 111
// let c:never
// c= function(){
//     throw new Error(';;;;')
//     // return {}
// }()
//函数
// function fun(a:number,c:string):string{
//     return a+c
// }
// console.log(fun(1,'aa'))
// console.log(fun(1,'1'))
// //默认
// function sun(a:string,c:string='222'):string{
//      if(a){
//         return a+c
//     }else{
//         return c
//     }
//     // if(c){
//     //     return c
//     // }else{
//     //     return a+''
//     // }
// }
// // console.log(fun(1))
// console.log(sun('1','1'))
// console.log(sun('qq'))
// function aa():void{
//     console.log('1')
// }
// // console.log(aa())
// aa()
//剩余
// function f1(...num:number[]):number{
//     let a:number = 0
//     for(let i = 0;i<num.length;i++){
//         a+=i
//     }
//     return a
// }
// console.log(f1(1,2,3,4))
// ts类
// class fn{
//     name:string
//     constructor(n:string){
//         this.name = n
//     }
//     run():void{
//         alert(this.name)
//     }
// };
// let f = new fn('张');
// f.run()
// f()
// ts 继承
// class fn{
//     name:string
//     constructor(n:string){
//         this.name = n
//     }
//     run():void{
//         alert(this.name)
//     }
// }
// class f1 extends fn{
//     constructor(n:string) {
//         super(n)
//     }
//     work():void{
//         alert(this.name+'1')
//     }
// }
// const f = new f1('李')
// f.run()
// f.work()
// ts继承修饰符
// class fn{
//    public name:string //都可以
//    protected age:string  //子类 和 类里可以 类外部不行
//    private height:any //类里可以 子类 和类外部不行
// //    public height:any //类里可以 子类 和类外部不行
//     constructor(n:string,m:string,l?:string){
//         this.name = n
//         this.age = m
//         this.height = l
//     }
//     run():void{
//         alert(this.name)
//     }
//     see():void{
//         alert(this.age)
//     }
//     set():void{
//         alert(this.height)
//     }
// }
// class f1 extends fn{
//     constructor(n:string,m:string) {
//         super(n,m)
//     }
//     work():void{
//         alert(this.name+'1')
//         // alert(this.height+'123')
//     }
// }
// const f = new f1('李','11')
// // f.run()
// // f.see()
// f.work()
// const fn1 = new fn('张','2','111')
// fn1.set()
// alert(fn1.height)
// alert(fn1.name)
// fn1.run()
// fn1.see()
// alert(fn1.age)//无法直接访问 protected 
// f.run()
// f.work()
//ts静态属性方法
// class fn{
//     static n:string = '10'
//     num:string //
//     constructor(n:string){
//         this.num = n
//     }
//     run(){
//         alert(this.num)
//         // alert(this.n)
//     }//实例方法
//   static  work(){
//         alert(fn.n)
//     }//静态方法   //不能访问类属性
// }
// alert(fn.n)
// fn.work()
// // ts多态
//  class fa{
//      name:string
//      constructor(n:string){
//          this.name = n
//      }
//      eat(){
//          console.log('吃')
//      }
//  }
//  class son extends fa{
//      constructor(n:string){
//          super(n)
//      }
//      eat(){
//          alert(this.name+'肉')
//      }
//  }
//  class son2 extends fa{
//     // constructor(n:string){
//     //     super(n)
//     // }
//     //不写会默认有
//     eat(){
//         alert(this.name+'草')
//     }
// }
// const f1 = new son('老虎')
// const f2 = new son2('兔子')
// f1.eat()
// f2.eat()
// 抽象类 抽象方法
//定义标准
var fa = /** @class */ (function () {
    function fa() {
    }
    fa.prototype.set = function () {
        console.log('111');
    };
    return fa;
}());
var son = /** @class */ (function (_super) {
    __extends(son, _super);
    function son() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    son.prototype.eat = function () {
    }; //抽象类中的抽象方法必须在子类实现
    return son;
}(fa));
//  const f = new fa()
//  class son1 {
// }
