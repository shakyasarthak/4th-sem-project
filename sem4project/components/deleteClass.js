import { nanoid } from 'nanoid';
import { classes, addClasses } from '../components/class';
import React from 'react'
const deleteClass = ({classCode}) => {
    const handleDelete = () => {
        classes = classes.filter((c) => c.classCode !== classCode);
      };
    
  return (
    <button onClick={handleDelete}>
    Delete class {classCode}
  </button>
  )
}

export default deleteClass