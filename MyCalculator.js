function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const ButtonsArr = [
  { name: "clear", number: "AC" },
  { name: "divide", number: "/" },
  { name: "multiply", number: "*" },
  { name: "seven", number: 7 },
  { name: "eight", number: 8 },
  { name: "nine", number: 9 },
  { name: "subtract", number: "-" },
  { name: "four", number: 4 },
  { name: "five", number: 5 },
  { name: "six", number: 6 },
  { name: "add", number: "+" },
  { name: "one", number: 1 },
  { name: "two", number: 2 },
  { name: "three", number: 3 },
  { name: "decimal", number: "." },
  { name: "zero", number: 0 },
  { name: "equals", number: "=" }];
  
  
  let firstLine = "";
  let display = "";
  let idNumber = 0;
  let id = "";
  let result = NaN;
  
  class CalculatorButtons extends React.Component {
    constructor(props) {
      super(props);_defineProperty(this, "handleKeydown",
  
  
  
  
  
  
  
  
  
  
  
      e => {
        if (event.key == this.props.idNumber) this.onClick();
      });_defineProperty(this, "onClick",
  
      e => {
        //onClickStart
        id = this.props.id;
        idNumber = this.props.idNumber;
        // 0if
        if (id === "clear") {
          firstLine = "";
          display = "";
          $("#firstLine").text(String.fromCharCode(160));
          $("#display").text(0);
        } //if0end
        else if (display.length > 23) {
            $("#display").text("Digit Limits");
            setTimeout(() => $("#display").text(display), 1000);
          }
          //0else
          else {
              // 1if=
              if (/[=]/.test(idNumber)) {
                result =
                Math.round(1000000000000000 * eval(firstLine)) / 1000000000000000;
                //2if
                if (typeof result === "number") {
                  firstLine += idNumber + `${result}`;
                  display = `${result}`;
                } else {
                  result = 0;
                  firstLine += idNumber + `${result}`;
                  display = `${result}`;
                }
              } //1ifend
  
              //1elseif+*/
              else if (/[+*/]/.test(idNumber)) {
                  //2if
                  if (/[=]/.test(firstLine)) {
                    firstLine = `${result}` + idNumber;
                    display = idNumber;
                  } //2ifend
                  //2else
                  else if (/[*+/](-)$/.test(firstLine)) {
                      let aa = firstLine.split("");
                      aa.splice(aa.length - 2, 2);
                      firstLine = aa.join("") + idNumber;
                      display = idNumber;
                    } else if (/[*+/-]$/.test(firstLine)) {
                      let aa = firstLine.split("");
                      let bb = aa.pop();
                      firstLine = aa.join("") + idNumber;
                      display = idNumber;
                    } else {
                      firstLine += idNumber;
                      display = idNumber;
                    }
                } //2elseend
  
                //1elseif-
                else if (/[-]/.test(idNumber)) {
                    //2if
                    if (/[=]/.test(firstLine)) {
                      firstLine = `${result}` + idNumber;
                      display = idNumber;
                    } //2ifend
                    //2else
                    else if (/[-]$/.test(firstLine)) {
                      } else if (/[*+/](-)$/.test(firstLine)) {
                        let aa = firstLine.split("");
                        aa.pop();
                        aa.pop();
                        firstLine = aa.join("") + idNumber;
                        display = idNumber;
                      } else {
                        firstLine += idNumber;
                        display = idNumber;
                      }
                  } //2elseend
  
                  //1elseif.
                  else if (/[.]/.test(idNumber)) {
                      //2if
                      if (/[=]/.test(firstLine)) {
                        display = "0" + idNumber;
                        firstLine = "0" + idNumber;
                      } //2ifend
                      else if (display === "") {
                          display = "0" + idNumber;
                          firstLine = "0" + idNumber;
                        } else if (/[.]/.test(display)) {
                        }
                        //2else
                        else {
                            display += idNumber;
                            firstLine += idNumber;
                          }
                    } //2elseend
  
                    //1else0
                    else {
                        //2if
                        if (firstLine === "0" && id === "zero") {
                        }
                        //2elseif
                        else if (display === "0" && id === "zero") {
                          } else if (/[=]/.test(firstLine)) {
                            display = "" + idNumber;
                            firstLine = "" + idNumber;
                          } else if (/[*+/-]/.test(display)) {
                            firstLine += idNumber;
                            display = "" + idNumber;
                          } else if (firstLine === "0" && display === "0" && id !== "zero") {
                            display = "" + idNumber;
                            firstLine = "" + idNumber;
                          }
                          //2else
                          else {
                              display += idNumber;
                              firstLine += idNumber;
                            }
                      } //1elseend
              $("#firstLine").text(firstLine);
              $("#display").text(display);
            } //else0end
        //onClickEnd
      });this.state = {};}componentDidMount() {document.addEventListener("keydown", this.handleKeydown);}componentWillUnmount() {document.addEventListener("keydown", this.handleKeydown);}
    render() {
      return (
        React.createElement("button", {
          id: this.props.id,
          className: "buttonDesign",
          onClick: this.onClick },
  
        this.props.idNumber));
  
  
    }}
  
  class CalculatorLayer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      let CalculatorLayer = ButtonsArr.map((button, i, ButtonsArr) =>
      React.createElement(CalculatorButtons, { id: button.name, idNumber: button.number }));
  
      return React.createElement("div", { className: "layer" }, CalculatorLayer);
    }}
  
  class MyCalculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ac: 0 };
  
    }
    render() {
      return (
        React.createElement("div", { id: "calculatorDesign", className: "container-fluid img-responsive" },
        React.createElement("div", { id: "mainLine", className: "displayDesign" },
        React.createElement("p", { id: "firstLine", className: "firstLine" },
        String.fromCharCode(160)),
  
        React.createElement("p", { id: "display" }, "0")),
  
  
        React.createElement(CalculatorLayer, null)));
  
  
    }}
  
  ReactDOM.render(React.createElement(MyCalculator, null), document.getElementById("myCalculator"));
  
  $(function () {
    $("#multiply").text("x");
  });