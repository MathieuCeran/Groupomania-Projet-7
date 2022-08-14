import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../Components/utils/Utils";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";
import { Link } from "react-router-dom";

const Trending = () => {
  const usersData = useSelector((state) => state.usersReducer);

  const ecommerce = Object.values(usersData).filter((user) => {
    return user.service === "E-commerce";
  });

  const graphiste = Object.values(usersData).filter((user) => {
    return user.service === "Graphiste";
  });

  const Ecommerce = () => (
    <div className="useronline-container">
      <>
        {!isEmpty(usersData[0]) &&
          ecommerce.map((users) => {
            return (
              <Link to={`/userprofil/${users.id}`} key={users.id}>
                <div className="user-online">
                  <div className="left-side">
                    <div>{users.media && <img src={users.media} alt="" />}</div>
                  </div>
                  <div className="right-side">
                    <span>
                      {users.firstname} {users.name}
                    </span>
                    <span className="service">{users.service}</span>
                  </div>
                </div>
              </Link>
            );
          })}
      </>
    </div>
  );

  const Graphiste = () => (
    <div className="useronline-container">
      <>
        {!isEmpty(usersData[0]) &&
          graphiste.map((users) => {
            return (
              <Link to={`/userprofil/${users.id}`} key={users.id}>
                <div className="user-online">
                  <div className="left-side">
                    <div>{users.media && <img src={users.media} alt="" />}</div>
                  </div>
                  <div className="right-side">
                    <span>
                      {users.firstname} {users.name}
                    </span>
                    <span className="service">{users.service}</span>
                  </div>
                </div>
              </Link>
            );
          })}
      </>
    </div>
  );

  return (
    <>
      <div>
        <h3>Utilisateurs par services</h3>
      </div>
      <div className="items">
        <Accordion atomic={true}>
          <AccordionItem title="E-commerce">
            <Ecommerce />
          </AccordionItem>

          <AccordionItem title="Graphistes">
            <Graphiste />
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Trending;
