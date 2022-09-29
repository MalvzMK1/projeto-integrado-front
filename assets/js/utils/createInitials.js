const createSubjectInitials = (name) => {
    let subjectName = name;
    let subjectInitials = [];

    let splitedName = subjectName.split(' ');
    splitedName.forEach(index => {
        subjectInitials.push(index[0].toUpperCase());
    });

    return subjectInitials.join('');
}

export default createSubjectInitials;