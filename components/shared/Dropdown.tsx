import React, { useState } from 'react'
import {Select,SelectContent, SelectItem,SelectTrigger,SelectValue,
} from "@/components/ui/select"
import { ICategory } from '@/lib/database/models/category.model'
  

type DropdownProps = {
    value?: string
    onChangeHandler?: () => void 
}

const Dropdown = ({ value, onChangeHandler}: DropdownProps) => {

const [categories, setCategories] = useState<ICategory[]>([])

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
        <SelectTrigger className="select-field">
            <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="pros" className='select-item p-regular-14'>Pros</SelectItem>
            <SelectItem value="juniors" className='select-item p-regular-14'>Juniors</SelectItem>
            <SelectItem value="midget" className='select-item p-regular-14'>14U - 18U</SelectItem>
            <SelectItem value="minor" className='select-item p-regular-14'>10U - 13U</SelectItem>
        </SelectContent>
    </Select>

  )
}

export default Dropdown
