import { useState } from "react";
import swal from "sweetalert";
const Todolist = () => {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState([]);

  function AlertMessage() {
    sweetAlert("Oops...", "Something went wrong!", "error");
  }
  function Success() {
    swal("Good job!", "Successfully", "success");
  }
  function handleSumit() {
    if (!text || !time) {
      AlertMessage();
    } else {
      Success();
      const id = Date.now();
      const addData = { text, time, id };
      const newAdd = [...data, addData];
      setData(newAdd);
      setText("");
      setTime("");
    }
  }
  function handleREmove(id) {
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const reMove = data.filter((d) => d.id !== id);
        setData(reMove);
        swal("Deleted!", "Your item has been deleted.", "success");
      }
    });
  }
  return (
    <div className="w-[95%] h-[509px] bg-slate-700 m-auto mt-[3rem] rounded-3xl  flex flex-col items-center overflow-y-auto md:hidden">
      <div className="z-50 text-center sticky top-1 backdrop-blur-lg  p-2 rounded-3xl">
        <h1 className=" text-[2.2rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-red-900 animate-bounce">
          TO-DO List{" "}
        </h1>
        <div className="w-[100%] flex flex-col justify-center gap-5  p-3 shadow-2xl bg-stone-300 backdrop-blur-3xl rounded-xl md:flex-col">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Write sonthong... "
            className="w-[300px] rounded-3xl p-2 border-none outline-none"
          />
          <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            type="time"
            placeholder="Time"
            className="w-[200px] rounded-3xl p-2 border-none outline-none"
          />
          <div>
            <button
              onClick={handleSumit}
              className="text-[1.3rem] px-[35px] py-2 md:px-3 md:py-2 rounded-full bg-pink-500 text-white active:scale-110 hover:bg-red-400 transition cursor-pointer hover:rounded-ee-3xl hover:font-bold"
            >
              Go
            </button>
          </div>
        </div>
      </div>
      {data.map((item) => {
        return (
          <ul
            className=" w-[90%] my-1  flex  justify-between items-center p-2 bg-slate-50 rounded-3xl hover:scale-105 transition shadow-2xl"
            key={item.id}
          >
            <li className="text-[1rem] font-medium  md:text-[1.3rem] text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-red-900">
              {item.text}
            </li>
            <li className="text-[1rem] font-medium md:text-[1.3rem] text-pink-300">
              {item.time}
            </li>
            <li
              className="cursor-pointer text-[15px] font-medium px-[10px]  py-[1px] rounded-3xl bg-pink-600 text-white active:scale-110 transition md:px-[30px] hover:rounded-s-md hover:bg-red-500"
              onClick={() => handleREmove(item.id)}
            >
              Remove
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Todolist;
