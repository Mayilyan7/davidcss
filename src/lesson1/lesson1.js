import React from 'react';
// import'./lesson1.css'
function Lesson1() {
  return (
      <table className={"samurai1"}>
          <tr>
              <td>
                  <table className={"samurai2"}>
                      <tr>
                          <td>
                              <p>
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley of type and scrambled it to make a type
                                  specimen book. It has survived not only five centuries, but also the leap into
                                  electronic typesetting, remaining essentially unchanged. It was popularised in
                                  the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                  and more recently with desktop publishing software like Aldus PageMaker including
                                  versions of Lorem Ipsum.
                              </p>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
          <tr>
              <td>
                  <table className={"samurai3"} align={"center"}>
                      <tr>
                          <td className={"bg"}>
                              <p align={"center"}>
                                  Lorem Lorem!!!
                              </p>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <p>
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley of type and scrambled it to make a type
                                  specimen book. It has survived not only five centuries, but also the leap into
                                  electronic typesetting, remaining essentially unchanged. It was popularised in
                                  the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                  and more recently with desktop publishing software like Aldus PageMaker including
                                  versions of Lorem Ipsum.
                              </p>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
          <tr>
              <td>
                  <table align={"right"}>
                      <tr>
                          <td className={"samurai4"} colSpan={"2"}></td>
                      </tr>
                      <tr>
                          <td className={"lorem"}>
                              Lorem
                          </td>
                          <td className={"lorem1"}>
                              Lorem!!!
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
  );
}

export default Lesson1;
