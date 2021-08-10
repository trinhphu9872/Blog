module.exports = {
    mongoToArrayObject: (mongoo) => {
        return mongoo.map((mongoo) => mongoo.toObject());
    },
    mongoObject: (mongoo) => {
        return mongoo ? mongoo.toObject() : mongoo;
    },
};
