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
    default:
        return "default"
  }
}

export default CategoryMapper;
