// dar ein function mikhahim amaliyat marbooot be etebar sanji setData ro be sorat 1ja anjam dahim
export const validate=data=>{
// 1 bject tareef mikonim ke erorr haye har input ra adr an berizim
const errors={};
if(!data.name.trim()){
// trem()-> faza hayeh khali dar on reshteh ro hazf mikoneh
// ba ! migim agheh chizi vared nakard error bedeh
// ageh cizi varednakardeh bood biya 1 key,vlaue tareef kon ke meghdar key on name basheh va meghdar value barabar matn error ma bashad
errors.name="Username required";
}else{
    // dar gheir ein sorat ageh matni bashad item marboot name dar object error ra ahzf kon 
    delete errors.name;
}
// email
if(!data.email){
    errors.email="Email required";
}else if(!/\S+@\S+\.\S+/.test(data.email)){
    // ageh emil varedeh namarboot bood error zir robedeh(mokhalef ein olgoeike tareef kardim)
    errors.email="email address is invalid";
}else{
    delete errors.email;
    // ageh hich error i nadasht fild errors.email  ro az object error ha pak kon
     
}
// password
if(!data.password){
    errors.password="password is required";
}else if(data.password.length<6){
    // ageh tedad carecter ha kamtar az 6 bood error bedeh
    errors.password="Password nead to be 6 character or more";
}else{
    delete errors.password;

}
// confirmPassword
if(!data.confirmPassword){
    errors.confirmPassword="confirm the password";
}else if(data.confirmPassword !== data.password){
    // ageh ba password ghabli barabar nabood error zir ro bedeh
    errors.confirmPassword="password do not match";
}else{
    delete errors.confirmPassword;

}
// checklist
if(data.isAccepted){
    delete errors.isAccepted;
    // ageh haman meghdar avaliyeh yani false bood ein error ro namayesh bedeh
}else{
    errors.isAccepted="accept our regulations";

}
return errors
// kole object error ro yeki yeki return mikoneh va ma mitonim be onha dastresi dashteh bashim
 
}
// aknoon be signup rafteh validate ro import mokonimva az on estefadeh mionim