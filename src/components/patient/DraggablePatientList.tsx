'use client';

import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';

import { SortableItem } from './SortableItem';

export interface Patient {
  id: string;
  name: string;
}

const initialPatients: Patient[] = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Smith' },
  { id: '3', name: 'Alice Johnson' },
];

const DraggablePatientList: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>(initialPatients);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setPatients((prev) => {
        const oldIndex = prev.findIndex((p) => p.id === active.id);
        const newIndex = prev.findIndex((p) => p.id === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={patients.map((p) => p.id)}
        strategy={verticalListSortingStrategy}
      >
        <ul className="space-y-2">
          {patients.map((patient) => (
            <SortableItem key={patient.id} id={patient.id} name={patient.name} />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
};

export default DraggablePatientList;
