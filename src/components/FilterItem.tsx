import React, { useState } from "react";
import styled from "styled-components";

const FilterWrapper = styled.div`
    width: 282px;
`;

const ListWrapper = styled.ul`
    list-style: none;
`;

const MainMenu = styled.li``;

const Item = styled.li``;

const SubMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;
`;

export const CustomCheckbox = styled.input`
    width: 18px;
    height: 18px;
    &:checked {
        background: #fb5c00;
    }
    &:hover {
        cursor: pointer;
    }
`;

const FilterItem = () => {
    const [menuList, setMenuList] = useState({
        none: [
            { name: "주스", value: "juice", checked: false },
            { name: "탄산", value: "soft_drink", checked: false },
            { name: "기능성 음료", value: "energe_drink", checked: false },
            { name: "차/커피", value: "tea_coffe", checked: false },
            { name: "유제품", value: "milk", checked: false },
            { name: "기타", value: "none_etc", checked: false },
        ],
        alco: [
            { name: "소주", value: "soju", checked: false },
            { name: "맥주", value: "beer", checked: false },
            { name: "양주", value: "whisky", checked: false },
            { name: "탁주", value: "takju", checked: false },
            { name: "과일주", value: "fruit", checked: false },
            { name: "기타", value: "alco_etc", checked: false },
        ],
    });

    const [checkedMenu, setCheckedMenu] = useState([]);

    const onCheck = (drink: object, isAlco: string) => {
        // if(drink.checked){
        //     setCheckedMenu()
        //     setMenuList()
        // }
        // let isChecked = false;
        // menuList[isAlco].map((menu)=> menu.value===drink.value && {menu.checked && isChecked=true})
        console.log(menuList.none[0]);
    };

    return (
        <FilterWrapper>
            <ListWrapper>
                <MainMenu>
                    <h3>논알콜</h3>
                    {menuList.none.map((drink) => (
                        <Item>
                            <SubMenu>
                                {drink.name}
                                <CustomCheckbox
                                    type="checkbox"
                                    value={drink.value}
                                    onClick={() => {
                                        onCheck(drink, "none");
                                    }}
                                />
                            </SubMenu>
                        </Item>
                    ))}
                </MainMenu>
                <MainMenu>
                    <h3>알콜</h3>
                    {menuList.alco.map((drink) => (
                        <Item>
                            <SubMenu>
                                {drink.name}
                                <CustomCheckbox type="checkbox" value={drink.value} />
                            </SubMenu>
                        </Item>
                    ))}
                </MainMenu>
            </ListWrapper>
        </FilterWrapper>
    );
};

export default FilterItem;
