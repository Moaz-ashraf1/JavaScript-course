const moaz = {
  fullName: "Moaz ashraf",
  mass: 78,
  height: 1.69,
  MoCalcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};
const mawada = {
  fullName: "mawada ashraf",
  mass: 92,
  height: 1.95,
  MaCalcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

if (mawada.MaCalcBMI() > moaz.MoCalcBMI()) {
  console.log(
    `${mawada.fullName}'s BMI (${mawada.BMI}) is higher than ${moaz.fullName}'s ${moaz.BMI}`
  );
} else if (mawada.MaCalcBMI() < moaz.MoCalcBMI()) {
  console.log(
    `${moaz.fullName}'s BMI (${moaz.BMI}) is higher than ${mawada.fullName}'s ${mawada.BMI}`
  );
} else {
  console.log("vaild");
}
