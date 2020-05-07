const CategoryMapper = (cateogry) => {
  switch(cateogry) {
    case 0:
      return "zero"
    case 1:
       return "Essential Worker"
    case 2:
       return "Quarantine"
    case 3:
       return "Safe Space"
    case 4:
      return "Student"
    case 5:
        return "Other"
    default:
        return "default"
  }
}

export default CategoryMapper;
