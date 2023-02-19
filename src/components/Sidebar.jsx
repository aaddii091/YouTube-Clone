import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = (props) => {
  return (
    <>
      <Stack
        direction="row"
        sx={{
          overflowY: "auto",
          height: { sx: "auto", md: "95%" },
          flexDirection: { md: "column" },
        }}
      >
        {categories.map((category) => (
          <button
            className="category-btn"
            onClick={() => {
              props.setSelectedCategory(category.name);
            }}
            style={{
              backgroundColor:
                category.name === props.selectedCategory && "#FF0909",
              transform:
                category.name === props.selectedCategory && "scale(1.1)",
              color: "white",
            }}
            key={category.name}
          >
            <span
              className="cat_logo"
              style={{
                color:
                  category.name === props.selectedCategory ? "white " : "red",
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span>{category.name}</span>
          </button>
        ))}
      </Stack>
    </>
  );
};

export default Sidebar;
