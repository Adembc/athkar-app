function newLine(text) {
  return text.split("br").map((item, idx) => {
    return (
      <>
        {item}
        <br />
      </>
    );
  });
}

export default newLine;
