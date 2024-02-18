import { useCallback, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./GroceryList.module.css";
import List from "./list";

const getData = () => {
  let data = localStorage.getItem("list");
  if (data) {
    data = JSON.parse(data);
  } else {
    data = [];
  }
  return data;
};

function GroceryList() {
  const [list, setList] = useState(getData());
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = e.target.elements.listItem.value;
    // e.target.elements[0].value = "";
    if (!item) {
      toast.error("Item Empty", {
        theme: "colored",
      });
    } else {
      if (name && isEditing) {
        let newItem = list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        });
        setList(newItem);
        setName("");
        setIsEditing(false);
        setEditId(null);
        toast.success("Item Updated");
      } else {
        console.log("how it can be");
        let newItem = {
          id: new Date().getTime().toString(),
          title: item,
          done: false,
        };
        setList([...list, newItem]);
        toast.success("Item Added");
      }
    }
  };

  useEffect(() => {
    if (list) {
      localStorage.setItem("list", JSON.stringify(list));
    }
  }, [list]);

  const handleDelete = useCallback(
    (id) => {
      setList(list.filter((item) => item.id !== id));
      toast.success("Item Deleted");
    },
    [list]
  );

  const handleEdit = (id) => {
    let specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(specificItem.id);
    setName(specificItem.title);
  };

  const handlDoneItem = useCallback(
    (id) => {
      let newList = list.map((item) => {
        if (item.id === id) {
          if (!item.done) {
            item.done = true;
            toast.success("Item Done");
          } else {
            item.done = false;
            toast.success("Item UnDone");
          }
        }
        return item;
      });
      setList(newList);
    },
    [list]
  );

  return (
    <>
      <section className={styles.box}>
        <ToastContainer
          position="top-center" // Set the position to top-center
          autoClose={5000} // Set the autoClose duration (in milliseconds)
          hideProgressBar={false} // Set hideProgressBar to false to show the progress bar
          newestOnTop={true} // Set newestOnTop to false to display newer notifications below older ones
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className={styles.box_heading}>
          <h2>Grocery List</h2>
        </div>
        <form className={styles.grocery_form} onSubmit={handleSubmit}>
          <input type="text" name="listItem" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="submit" value={isEditing ? "Edit" : "Submit"} />
        </form>
        {list.length > 0 && <List items={list} removeItem={handleDelete} itemDone={handlDoneItem} editItem={handleEdit} />}
      </section>
    </>
  );
}

export default GroceryList;
