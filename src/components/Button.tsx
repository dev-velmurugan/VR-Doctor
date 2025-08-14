import React from 'react';
import { Pressable, Text, PressableProps } from 'react-native';

export function Btn({ children, variant='primary', ...props }:{children:any, variant?:'primary'|'light'} & PressableProps){
  const base = "px-4 py-2 rounded-xl";
  const cls = variant==='primary' ? base+" bg-accent" : base+" bg-[#eaf5f1]";
  const color = variant==='primary' ? "text-white" : "text-[#0a3b31]";
  return (
    <Pressable className={cls} {...props}><Text className={"font-bold "+color}>{children}</Text></Pressable>
  );
}
