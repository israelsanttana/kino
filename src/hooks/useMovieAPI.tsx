
const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE;
const BG_FILME_URL = process.env.NEXT_PUBLIC_BG_FILME_URL;
const NEXT_PUBLIC_TOKEN_DE_LEITURA = process.env.NEXT_PUBLIC_TOKEN_DE_LEITURA;

export function useMovieAPI() {

    async function get(fragmentoURL: string, params?: string) {

        const fragmento = fragmentoURL.startsWith("/") ? fragmentoURL.substring(1) : fragmentoURL;

        try {
            const resposta = await fetch(`${URL_BASE}/${fragmento}?language=pt-BR&page=1${params ? `&${params}` : ""}`, {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_DE_LEITURA}`,
                },
            })
            const json = await resposta.json();
            return {
                json, status: resposta.status,
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    function formatarImagemURL(url: string) {
        if (!url) return "";
        return `${BG_FILME_URL}${url}`;
    }

    async function getUltimosFilmes(): Promise<Filme[]> {
        const { json, status } = await get("movie/now_playing")
        const fatia = json.results.slice(0, 12);
        return fatia.map((item: any) => {
            return {
                id: item.id,
                titulo: item.title,
                descricao: item.overview,
                dataDeLancamento: new Date(item.release_date),
                nota: item.vote_average,
                linkImagemFundo: formatarImagemURL(item.backdrop_path),
                linkImagemPoster: formatarImagemURL(item.poster_path),
            }
        })
    }

    async function getGeneroDoFilme(filmeId: string) {
        const { json } = await get(`/movie/${filmeId}`)
        return json.genres.map((genero: any) => {
            return {
                id: genero.id,
                nome: genero.name
            }
        })
    }

    async function getFilmeDetalhado(idFilme: string): Promise<FilmeDetalhado> {
        const { json } = await get(`/movie/${idFilme}`, "append_to_response=credits");

        return {
            id: json.id,
            titulo: json.title,
            descricao: json.overview,
            dataDeLancamento: new Date(json.release_date),
            nota: json.vote_average,
            linkImagemFundo: formatarImagemURL(json.backdrop_path),
            linkImagemPoster: formatarImagemURL(json.poster_path),
            tituloOriginal: json.original_title,
            generos: json.genres.map((g: any) => {
                return { id: g.id, nome: g.name };
            }),
            atores: json.credits.cast.slice(0, 10).map((ator: any) => {
                return {
                    id: ator.id,
                    nome: ator.name,
                    imagemPerfill: formatarImagemURL(ator.profile_path),
                    personagem: ator.character,
                }
            }),
            duracao: json.runtime,
        };

    }

    return {
        getUltimosFilmes,
        getGeneroDoFilme,
        getFilmeDetalhado
    }
}