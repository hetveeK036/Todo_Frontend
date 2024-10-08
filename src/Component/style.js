import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    boxSizing: "border-box",
    alignItems: "center",
    margin: "0px",
    padding: "0px",

    // header and all textfield
    "& .MuiTypography-root": {
      fontFamily: "cursive",
    },
    // todoItem
    "& .MuiBox-root css-0": {
      display: "flex",
      justifyContent: " space-around",
      border: "1px solid lightgray",
      alignItems: "center",
      borderRadius: "10px",
      width: {
        xs: 100,   //0
        sm: 200,  // 600
        md: 300,  //900
        lg: 400,  //1200
        xl: 500,  //1536
      },
      padding: "15px",
      margin: "5px",
    },
    //add button
    "& .css-142372x-MuiButtonBase-root-MuiButton-root": {
      height: "45px",
      // width: "10%",
      width: {
        xs: 100,   //0
        sm: 200,  // 600
        md: 300,  //900
        lg: 400,  //1200
        xl: 500,  //1536
      },
      marginLeft: "10px",
      fontSize: "16px",
    },
  },

  // todo Component
  todoComponent: {
    textAlign: "center",
    //input field
    "& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root": {
      width: "50%",
      // width: {
      //   xs: 100,   //0
      //   sm: 200,  // 600
      //   md: 300,  //900
      //   lg: 400,  //1200
      //   xl: 500,  //1536
      // },
      marginBottom: "10px",

      "& .css-j882ge-MuiInputBase-root-MuiOutlinedInput-root": {
        height: "50px", // it's not necessary when u write size = 'small' in textfield 
      },
    },
  },

  // todo List
  todoList: {
    border: "1px solid gray",
    borderRadius: "10px",
    margin: "auto",
    marginTop: "15px",
    width: "60%",
    // width: {
    //   xs: 100,   //0
    //   sm: 200,  // 600
    //   md: 300,  //900
    //   lg: 400,  //1200
    //   xl: 500,  //1536
    // },
    textAlign: "left",
    padding: "15px",
  },

// todo Items
      todoItem: {
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid lightgray',
        alignItems: 'center',
        borderRadius: '10px',
        width: '90%',
        padding: '15px',
        // margin: '5px',
        marginInline: 'auto',
        marginBlock: '5px',
    },
    checkedItem: {
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid green',  // Change border color when checked
        backgroundColor: '#e0ffe0',  // Change background color when checked
        alignItems: 'center',
        borderRadius: '10px',
        width: '90%',
        padding: '15px',
        // margin: '5px',
        marginInline: 'auto',
        marginBlock: '5px',
        flexDirection: {}
    },
    todo: {
        // Default style for the todo text
        flex: 1,
    },
    checkedText: {
        textDecoration: 'line-through', // Line through when checked
        textDecorationColor: "red", 
        flex: 1,
    },
    buttonContainer: {
        display: 'flex',
        gap: '10px',
        right: '1%',
    },
}));

export default useStyles;
