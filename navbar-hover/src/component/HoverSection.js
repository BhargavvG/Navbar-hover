import React from "react";

export default function HoverSection({ type }) {
  console.log(type);
  return (
    <div className="hovered">
      {type.map((item, i) => {
        return (
          <li className="column" key={i}>
            <ul className="nav-block">
              <li className="type-title">{item.title}</li>
              {item.categories
                ? item.categories.map((item, i) => {
                    return (
                      <li className="type-data" key={i}>
                        {item}
                      </li>
                    );
                  })
                : null}
            </ul>
          </li>
        );
      })}
    </div>
  );
}
