import { Fragment, useState } from "react";
import "./styles.css";

export default function App() {
  const [orderId] = useState([
    { orderid: "ORD001", room: "Room 1" },
    { orderid: "ORD003", room: "Room 3" },
    { orderid: "ORD002", room: "Room 2" },
    { orderid: "ORD005", room: "Room 5" },
    { orderid: "ORD004", room: "Room 4" }
  ]);

  const handleSort = (a, b) => {
    console.log("val A", a);
    console.log("val B", b);

    var arrA = Array.from(a.orderid);
    arrA.splice(0, 3);
    var convertA = Number(arrA.join(""));

    var arrB = Array.from(b.orderid);
    arrB.splice(0, 3);
    var convertB = Number(arrB.join(""));

    console.log(convertA);
    console.log(convertB);
    return convertB - convertA;
    // return new Date(b.date) - new Date(a.date); // sort from bigger
  };

  return (
    <div className="App">
      <h1>ReacJs Sorting Order ID</h1>
      <h2>Sorting Order Number by oldest</h2>

      <Fragment>
        {orderId.sort(handleSort).map((data) => {
          // console.log(data);

          return (
            <p key={data.orderid}>
              {data.orderid} {data.room}
            </p>
          );
        })}
      </Fragment>
    </div>
  );
}
