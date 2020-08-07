export const checkIntersection = (ball, barrier) => {
  const isEntry = ball.find((point) => {
    const coordY = barrier.pointLB.y >= point.y && point.y >= barrier.pointLT.y;
    const coordX = barrier.pointLT.x <= point.x && point.x <= barrier.pointRT.x;
    if (coordX && coordY) {
      return true;
    }
    return false;
  });

  return isEntry;
};
