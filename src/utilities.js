'use strict';

const useCustomVars = require("./core/useCustomVars");
const useCustomColors = require("./core/useCustomColors");

function validateScale(scale) {
  if (scale != "auto" && parseInt(scale) < 1)
    throw new Error("The min scale is: 1");
}

module.exports = function(custom) {
  const { spacing } = useCustomVars(custom.vars);
  const colors = useCustomColors(custom.colors);

  function scalar(scale) {
    return scale == "auto" ? scale : spacing * parseInt(scale);
  }

  const positions = ["center", "left", "right", "justify"];

  return {
    /*

            Sizing

        */

    width: (value) => {
      return {
        width: value[value.length - 1] === "%" ? value : parseFloat(value),
      };
    },

    maxWidth: (value) => {
      return {
        maxWidth: parseFloat(value),
      };
    },

    minWidth: (value) => {
      return {
        minWidth: parseFloat(value),
      };
    },

    /*

            Colors

        */

    text: (value) => {
      if (positions.includes(value)) {
        return { textAlign: value };
      } else {
        return { color: colors[value] || value };
      }
    },

    bg: (color) => {
      return {
        backgroundColor: colors[color] || color,
      };
    },

    /*

            Borders

        */

    border: (
      size = "1",
      color = "black",
      style = "solid",
      radius = "0.0001"
    ) => {
      return {
        borderWidth: parseInt(size),
        borderStyle: style,
        borderColor: colors[color] || color,
        borderRadius: parseFloat(radius),
      };
    },

    borderTop: (size = "1", color = "black") => {
      return {
        borderTopWidth: parseInt(size),
        borderTopColor: colors[color] || color,
      };
    },

    borderRight: (size = "1", color = "black") => {
      return {
        borderRightWidth: parseInt(size),
        borderRightColor: colors[color] || color,
      };
    },

    borderBottom: (size = "1", color = "black") => {
      return {
        borderBottomWidth: parseInt(size),
        borderBottomColor: colors[color] || color,
      };
    },

    borderLeft: (size = "1", color = "black") => {
      return {
        borderLeftWidth: parseInt(size),
        borderLeftColor: colors[color] || color,
      };
    },

    borderY: (size = "1", color = "black") => {
      return {
        borderTopWidth: parseInt(size),
        borderTopColor: colors[color] || color,
        borderBottomWidth: parseInt(size),
        borderBottomColor: colors[color] || color,
      };
    },
    borderX: (size = "1", color = "black") => {
      return {
        borderLeftWidth: parseInt(size),
        borderLeftColor: colors[color] || color,
        borderRightWidth: parseInt(size),
        borderRightColor: colors[color] || color,
      };
    },

    // border color
    borderColor: (color, position) => {
      if (!position) {
        return {
          borderColor: colors[color] || color,
        };
      }
      switch (position) {
        case "top": {
          return {
            borderTopColor: colors[color] || color,
          };
        }
        // no funciona (native bug)
        case "right": {
          return {
            borderRightColor: colors[color] || color,
          };
        }
        case "bottom": {
          return {
            borderBottomColor: colors[color] || color,
          };
        }
        // no funciona (native bug)
        case "left": {
          return {
            borderLeftColor: colors[color] || color,
          };
        }
        case "y": {
          return {
            borderTopColor: colors[color] || color,
            borderBottomColor: colors[color] || color,
          };
        }
        case "x": {
          return {
            borderRightColor: colors[color] || color,
            borderLeftColor: colors[color] || color,
          };
        }
        default: {
          return {
            borderColor: colors[color] || color,
          };
        }
      }
    },

    // border size
    borderSize: (size, position) => {
      const sizeInt = parseInt(size);
      if (!position) {
        return {
          borderWidth: sizeInt,
        };
      }
      switch (position) {
        case "top": {
          return {
            borderTopWidth: sizeInt,
          };
        }
        case "right": {
          return {
            borderRightWidth: sizeInt,
          };
        }
        case "bottom": {
          return {
            borderBottomWidth: sizeInt,
          };
        }
        case "left": {
          return {
            borderLeftWidth: sizeInt,
          };
        }
        default: {
          return {
            borderWidth: sizeInt,
          };
        }
      }
    },

    // border style
    borderStyle: (style) => {
      return {
        borderStyle: style,
      };
    },

    // border radius
    borderRadius: (
      radius,
      position,
      alternativePosition
    ) => {
      const radiusInt = parseInt(radius);
      if (!position) {
        return {
          borderRadius: radiusInt,
        };
      }
      if (
        !alternativePosition ||
        (alternativePosition !== "left" && alternativePosition !== "right")
      ) {
        switch (position) {
          case "top": {
            return {
              borderTopRightRadius: radiusInt,
              borderTopLeftRadius: radiusInt,
            };
          }
          case "right": {
            return {
              borderTopRightRadius: radiusInt,
              borderBottomRightRadius: radiusInt,
            };
          }
          case "bottom": {
            return {
              borderBottomRightRadius: radiusInt,
              borderBottomLeftRadius: radiusInt,
            };
          }
          case "left": {
            return {
              borderTopLeftRadius: radiusInt,
              borderBottomLeftRadius: radiusInt,
            };
          }
          default: {
            return {
              borderRadius: radiusInt,
            };
          }
        }
      } else {
        switch (position + "-" + alternativePosition) {
          case "top-right": {
            return {
              borderTopRightRadius: radiusInt,
            };
          }
          case "top-left": {
            return {
              borderTopLeftRadius: radiusInt,
            };
          }
          case "bottom-right": {
            return {
              borderBottomRightRadius: radiusInt,
            };
          }
          case "bottom-left": {
            return {
              borderBottomLeftRadius: radiusInt,
            };
          }
          default: {
            return {};
          }
        }
      }
    },

    /*

        Spacing

    */

    //padding
    p: (scale = "1") => {
      validateScale(scale);
      return {
        padding: scalar(scale),
      };
    },
    pb: (scale = "1") => {
      validateScale(scale);
      return {
        paddingBottom: scalar(scale),
      };
    },
    pt: (scale = "1") => {
      validateScale(scale);
      return {
        paddingTop: scalar(scale),
      };
    },
    py: (scale = "1") => {
      validateScale(scale);
      return {
        paddingVertical: scalar(scale),
      };
    },
    pl: (scale = "1") => {
      validateScale(scale);
      return {
        paddingLeft: scalar(scale),
      };
    },
    pr: (scale = "1") => {
      validateScale(scale);
      return {
        paddingRight: scalar(scale),
      };
    },
    px: (scale = "1") => {
      validateScale(scale);
      return {
        paddingHorizontal: scalar(scale),
      };
    },

    //margin
    m: (scale = "1") => {
      validateScale(scale);
      return {
        margin: scalar(scale),
      };
    },
    mb: (scale = "1") => {
      validateScale(scale);
      return {
        marginBottom: scalar(scale),
      };
    },
    mt: (scale = "1") => {
      validateScale(scale);
      return {
        marginTop: scalar(scale),
      };
    },
    my: (scale = "1") => {
      validateScale(scale);
      return {
        marginVertical: scalar(scale),
      };
    },
    ml: (scale = "1") => {
      validateScale(scale);
      return {
        marginLeft: scalar(scale),
      };
    },
    mr: (scale = "1") => {
      validateScale(scale);
      return {
        marginRight: scalar(scale),
      };
    },
    mx: (scale = "1") => {
      validateScale(scale);
      return {
        marginHorizontal: scalar(scale),
      };
    },

    /*
        Typography
    */

    //Headers
    h1: () => {
      return {
        fontSize: "44px",
      };
    },
    h2: () => {
      return {
        fontSize: "38px",
      };
    },
    h3: () => {
      return {
        fontSize: "32px",
      };
    },
    h4: () => {
      return {
        fontSize: "26px",
      };
    },
    h5: () => {
      return {
        fontSize: "20px",
      };
    },
    h6: () => {
      return {
        fontSize: "14px",
      };
    },

    //fonts

    s: () => {
      return {
        textDecoration: "line-through",
      };
    },

    u: () => {
      return {
        textDecoration: "underline",
      };
    },

    em: () => {
      return {
        fontStyle: "italic",
      };
    },

    bold: () => {
      return {
        fontWeight: "bold",
      };
    },

    mark: (color = "yellow") => {
      return {
        backgroundColor: colors[color] || color,
      };
    },
  };
}
