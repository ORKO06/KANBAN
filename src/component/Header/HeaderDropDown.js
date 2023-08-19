import HeaderDropDownItem from "./HeaderDropDownItem"
import { useContext } from "react";
import { GroupContext } from "../../utils/GroupContext";
import './HeaderDropDown.css'

const groupItems = ["Status","Priority","Users"];
const sortItems = ["Priority","Title"];

const HeaderDropDown = ({onSelect}) => {
  const {groupType, sortType ,setGroupType, setSortType} = useContext(GroupContext);

  const onSelectGroup=(type)=>{
    setGroupType(type);
    onSelect();
  }

  const onSelectSort=(type)=>{
    setSortType(type);
    onSelect();
  }

  return (
    <div className="HeaderDropDown">
        <HeaderDropDownItem data={groupItems} onChangeHandler={onSelectGroup} selected={groupType} />
        <HeaderDropDownItem data={sortItems} onChangeHandler={onSelectSort} selected={sortType} />
    </div>
  )
}

export default HeaderDropDown