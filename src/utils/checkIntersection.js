export const checkIntersection = (ball, barrier) => {
  const isEntry = ball.find((point) => {
    const coordX = barrier.pointLT.x <= point.x && point.x <= barrier.pointRT.x;

    const coordY = barrier.pointLB.y >= point.y && point.y >= barrier.pointLT.y;
    if (coordX && coordY) {
      return true;
    }
    return false;
  });

  return isEntry;
};
