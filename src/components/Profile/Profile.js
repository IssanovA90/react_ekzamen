import "./Profile.css"
import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const Add = () => {
    if (taskText.trim() !== '') {
      const newTask = taskText;
      setTasks([...tasks, newTask]);
      setTaskText('');
      localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
    }
    
  };
  const Exit = ()=>{
    window.location.href = '/registration';
  }

  const Delete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  return (
    <div className="container">
      <h1>Профиль пользователя</h1>
      <div>
        <div className="info_user">
          <p>Имя:</p><p className="text">{userData.firstName}</p>
        </div>
        <div className="info_user">
          <p>Фамилия:</p><p className="text">{userData.lastName}</p>
        </div>
        <div className="info_user">
          <p>Почта:</p><p className="text">{userData.email}</p>
        </div>
        <div className="info_user">
          <p>Город:</p><p className="text">{userData.city}</p>
        </div>
      </div>
      <div>
        <div className="add__container">
          <input
            type="text"
            placeholder="НАПИШИ ЗАДАЧУ"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <button onClick={Add}>Добавить</button>
        </div>
        <ul className="list_add">
          {tasks.map((task, index) => (
            <li key={index}>
              {task} <button onClick={() => Delete(index)}>Удалить</button>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={Exit}>выйти</button>
    </div>
  );
};

export default Profile;






