import { screen } from "@testing-library/react";
import Post from "..";
import { renderizaComProvider } from "../../../utils/test";

describe("Testes para o componente PostMomments", () => {
  test("Deve renderizar corretamente o componente", () => {
    renderizaComProvider(<Post />)

    expect(screen.getByText('Comentar')).toBeInTheDocument()
  })

  test("Deve adicionar um item na lista", () => {
    const { debug } = renderizaComProvider(<Post />, {
      preloadedState: {
        comentarios: {
          lista: [
            {
              comment: "Que legal!!",
              id: 1,
            },
            {
              comment: "Posso ir na sua casa para ver ele melhor?",
              id: 2,
            },
          ],
        },
      },
    });

    debug()

    expect(screen.getByTestId("listaComentarios").innerHTML).toContain("Que legal!!");
    expect(screen.getByTestId("listaComentarios").innerHTML).toContain("Posso ir na sua casa para ver ele melhor?");
  });
});
