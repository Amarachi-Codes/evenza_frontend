import React, { useState, type MouseEvent } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

interface NavDropdownProps {
  label: string;
  items: { label: string; onClick: () => void }[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ label, items }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        color="inherit"
        onClick={handleClick}
        sx={{
          textTransform: "none",
          fontWeight: 500,
          fontSize: "1rem",
          lineHeight: 1,
          padding: 0,
          
          "&:hover": { color: "#dd6e14" },
        }}
      >
        {label}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": `${label}-button`,
        }}
      >
        {items.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              item.onClick();
              handleClose();
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default NavDropdown;
