import{u as s,a,j as e,L as t,l}from"./index-e62d709f.js";const o=()=>{const{isLoggedIn:x}=s(),n=a();return e.jsxs("div",{className:"flex min-h-[calc(100vh-112px)] flex-col justify-between bg-[url('/Phone_with_phonebook.png')] bg-contain bg-center bg-no-repeat p-4",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"m-auto text-center max-[767px]:text-2xl max-[375px]:text-xl min-[768px]:text-3xl",children:"This is PhoneBook app for your contacts."}),e.jsx("p",{className:"m-auto mt-3 text-center max-[767px]:text-xl max-[375px]:text-lg min-[768px]:text-2xl",children:"Keep your contacts safe!"})]}),e.jsx("div",{children:x?e.jsxs("p",{className:"mt-3 text-center max-[767px]:text-xl max-[375px]:text-lg min-[768px]:text-2xl",children:["Would you like to log in to another account?",e.jsx("button",{type:"button",onClick:()=>n(l()),className:"mx-2 text-blue-500 hover:underline focus:underline",children:"Logout"})]}):e.jsxs("p",{className:"m-auto mt-3 text-center max-[767px]:text-xl max-[375px]:text-lg min-[768px]:text-2xl",children:["Please",e.jsx(t,{to:"/register",className:"mx-2 text-blue-500 hover:underline focus:underline",children:"register"}),"to get started use this app. ",e.jsx("br",{})," Already have an account?",e.jsx(t,{to:"/login",className:"mx-2 text-blue-500 hover:underline focus:underline",children:"Sign In!"})]})})]})};function r(){return e.jsx(o,{})}export{r as default};
