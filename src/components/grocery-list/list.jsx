import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenSquare } from "@fortawesome/free-solid-svg-icons";
import styles from "./GroceryList.module.css";

const List = ({ items, removeItem, itemDone, editItem }) => {
  return (
    <div className={styles.grocery_list}>
      {items.map((item) => {
        return (
          <article className={styles.list_item} key={item.id}>
            <div>
              <div>
                <input type="checkbox" onChange={() => itemDone(item.id)} checked={item.done} />
                <p style={item.done ? { textDecoration: "line-through" } : {}}>{item.title}</p>
              </div>
              <div>
                <button className={`${styles.btn} ${styles.btn_dlt}`} onClick={() => removeItem(item.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className={`${styles.btn} ${styles.btn_edit}`} onClick={() => editItem(item.id)}>
                  <FontAwesomeIcon icon={faPenSquare} />
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default memo(List);
