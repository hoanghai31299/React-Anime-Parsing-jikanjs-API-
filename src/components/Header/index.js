import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import jikanjs from "jikanjs";
import { Link } from "react-router-dom";
export default ({ anime, onChoose }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function list() {
      const get = await jikanjs.loadTop("anime", 1, "bypopularity");
      setList(get.top);
    }
    list();
  }, []);
  const loadList = async (type, filter) => {
    const get = await jikanjs.loadTop(type, 1, filter);
    setList(get.top);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen(!isOpen);
  return (
    <div className="header">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand>
          <Link className="link" to="/">
            FWB = Forever Wibu
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNav} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link className="link" to="/characters">
                  <span className="link">Characters</span>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="link" to="/">
                  <span className="link">Stats</span>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="ml-5">
              <NavbarText>Anime:</NavbarText>
              <select
                className="form-control-sm"
                onChange={(e) => loadList("anime", e.target.value)}>
                <option disabled>Top Anime</option>
                <option value="bypopularity">Popularity</option>
                <option value="favorite">Favorite</option>
                <option value="airing">Airing</option>
                <option value="upcoming">Upcoming</option>
                <option value="tv">TV</option>
                <option value="movie">Movie</option>
                <option value="ova">Ova</option>
                <option value="special">Special</option>
              </select>
            </NavItem>
            <NavItem className="ml-3">
              <NavbarText>Choose Movie:</NavbarText>
              <select
                class="form-control-sm"
                value={anime}
                onChange={(e) => {
                  onChoose(e.target.value);
                }}
                style={{ minWidth: "700px" }}>
                <option disabled>Choose Anime</option>
                {list.map((item, index) => {
                  return (
                    <option value={item.mal_id} key={item.mal_id}>
                      {item.title}
                    </option>
                  );
                })}
              </select>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
