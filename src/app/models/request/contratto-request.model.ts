export interface ContrattoRequest {

    contrattoID: number;
	dataAssunzione: string;
	ruoloID: number;
	stipendio: number;
	categoriaID: number;
	dataDimissione?: string;
	status: number;
	employeeID: number;
}
