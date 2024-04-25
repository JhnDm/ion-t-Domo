import React, { useState } from 'react';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonInput,
  IonButton,
} from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}


const TodoListApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const history = useHistory(); // Initialize useHistory hook




  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };


  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleBack = () => {
    history.push('/home'); // Navigate back to the home page
  };


  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>To-Do List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={handleBack}>Back</IonButton>
        <br />
        <br />
        <br />
        <IonItem>
          <IonInput
            placeholder="Enter a new todo"
            value={newTodo}
            onIonChange={(e) => setNewTodo(e.detail.value!)} 
          />
          <IonButton slot="end" onClick={addTodo}>Add</IonButton>
        </IonItem>
        <br />
        <IonList>
          {todos.map((todo) => (
            <IonItem key={todo.id}>
              <IonCheckbox
                slot="start"
                checked={todo.completed}
                onIonChange={() => toggleTodo(todo.id)}
              />
              <IonLabel style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </IonLabel>
              <IonButton slot="end" onClick={() => deleteTodo(todo.id)}>Delete</IonButton>
            </IonItem>
          ))}
        </IonList>
       
      </IonContent>
    </IonApp>
  );
};


export default TodoListApp;




