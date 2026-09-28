const allowedLabels = new Set([
    'Dairy-Free',
    'Gluten-Free',
    'Egg-Free',
    'Peanut-Free',
    'Soy-Free',
    'Sesame-Free',
    'Shellfish-Free',
    'FODMAP-Free',
    'Sugar-Conscious',
    'Keto-Friendly',
    'Paleo',
    'No oil added'
]);

export const filterHealthLabels = (labels = []) =>
    labels.filter(label => allowedLabels.has(label));