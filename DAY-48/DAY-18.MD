::before

  content: "";

  outline: none;

   accent-color: #fff;

   .keys-checkbox input:checked::before {
  left: 35px;
  background: #fff;
}
checked means pseudoelement ko click krne par ye css apply krdo--> ::before


 user-select: none;

  margin: 0 -22px 0 -22px;

   border-radius: 0 0 5px 5px;


1)data-key="a"   <!-- data-key   ye ek custom data attribute -->   
<!-- js me ise me dataset.property  se acces kr skta hu-->
data is dataset - ke baad jo doge voi hogi property jese isme key hai tu
access krne ke lie
.dataset.key krenge