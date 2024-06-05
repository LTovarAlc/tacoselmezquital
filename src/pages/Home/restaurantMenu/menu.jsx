import React from "react";
import "./menu.css";
import CardMenu from "./menuCard/menuCard";

const RestaurantMenu = () => {
  const tacos = {
    title: "Tacos",
    dishes: [
      {
        name: "Orden de tacos",
        price: "$85.00",
        description: [
          "Barbacoa o asada $17.00 c/u",
          "Tortilla de maíz o harina",
        ],
      },
      {
        name: "Orden de tacos de guiso",
        price: "$75.00",
        description: [
          "Chicharrón en salsa verde",
          "Asado",
          "Picadillo",
          "Huevo verde",
          "Huevo con papas",
          "Salchicha asada a la mexicana",
          "Queso en salsa",
        ],
      },
    ],
  };

  const tortas = {
    title: "Tortas",
    dishes: [
      {
        name: "Torta barbacoa",
        price: "$60.00",
      },
      {
        name: "Torta de carne asada",
        price: "$60.00",
      },
      {
        name: "Torta de guiso",
        price: "$60.00",
      }
    ],
  };

  const paquetes = {
    title: "Paquetes Especiales",
    dishes: [
      {
        name: "1 kg de barbacoa",
        price: "$360.00",
      },
      {
        name: "1/2 kg de barbacoa",
        price: "$210.00",
      },
      {
        name: "1 kg de carne asada",
        price: "$350.00",
      },
      {
        name: "1/2 kg de carne asada",
        price: "$200.00",
      }
    ],
  };

  return (
    <section className="menu" id="menu">
      <h2>Menú</h2>
      <div className="menuCards-container">
        <CardMenu title={tacos.title} dishes={tacos.dishes} />
        <CardMenu title={tortas.title} dishes={tortas.dishes} />
        <CardMenu title={paquetes.title} dishes={paquetes.dishes} />
      </div>
    </section>
  );
};

export default RestaurantMenu;
