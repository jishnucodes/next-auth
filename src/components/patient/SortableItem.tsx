'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';

interface SortableItemProps {
  id: string;
  name: string;
}

export const SortableItem: React.FC<SortableItemProps> = ({ id, name }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: isDragging ? '#f3f4f6' : '#fff',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '6px',
    cursor: 'grab',
    boxShadow: isDragging ? '0 2px 8px rgba(0, 0, 0, 0.1)' : undefined,
  };

  return (
    <li ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {name}
    </li>
  );
};
