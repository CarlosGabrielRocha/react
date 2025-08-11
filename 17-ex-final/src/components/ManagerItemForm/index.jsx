import { useContext, useRef, useState } from "react";
import { SaveButton } from "../buttons";
import Form from "../Form";
import Input from "../Input";
import Select from "../Select";
import TextArea from "../TextArea";
import styles from "./index.module.css"
import DatabaseContext from "../../contexts/databaseContext";

export default function ManagerItemForm(props) { // action = 'add' | 'edit'
  const { addData, editData, safeFindData } = useContext(DatabaseContext)

  const item = useRef(safeFindData(props.itemId))

  const [name, setName] = useState(item.current?item.current.name:'')
  const [quantity, setQuantity] = useState(item.current?item.current.quantity:0)
  const [price, setPrice] = useState(item.current?item.current.price:0)
  const [category, setCategory] = useState(item.current?item.current.category:'food')
  const [description, setDescription] = useState(item.current?item.current.description:'')
  
  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (props.action === 'edit') editItem()
    if (props.action === 'create') createItem()
  }

  const createItem = () => {
    addData(name, +quantity, +price, category, description)
    alert('Item adicionado com sucesso!')
    clearForm()
  }

  const editItem = () => {
    editData(props.itemId, { name, quantity: +quantity, price: +price, category, description})
    alert('Item editado com sucesso!')
  }

  const clearForm = () => {
    setName(''); setQuantity(0); setPrice(0); setCategory('food'); setDescription('');
  }

  return (
    <Form submitFunction={handleSubmit}>
      <div className={styles.inputContainer}>
        <Input 
          type="text"
          id="name" 
          label="Nome:" 
          value={name} 
          handler={(ev) => setName(ev.target.value)} />
        <Input 
          type="number" 
          id="quantity" 
          label="Quantidade:"
          value={quantity}
          handler={(ev) => setQuantity(ev.target.value)} />
        <Input 
         type="number"
         id="price"
         label="Preço:" 
         value={price}
         handler={(ev) => setPrice(ev.target.value)} />
        <Select 
          id="category" 
          label="Categoria:" 
          options={[
            {value: "food", text: "Alimento"},
            {value: "cleaner", text: "Limpeza"},
            {value: "utensil", text: "Utensílio"},
            {value: "cosmetic", text: "Cosmético"}
          ]} 
          value={category}
          handler={(ev) => setCategory(ev.target.value)}/>
      </div>
      <TextArea 
        id="description"
        label="Descrição:"
        cols="50" 
        rows="14" 
        value={description}
        handler={(ev) => setDescription(ev.target.value)}/>
      <SaveButton />
    </Form>
  )
}