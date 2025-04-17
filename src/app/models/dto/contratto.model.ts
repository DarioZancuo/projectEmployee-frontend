import { CategoriaModel } from "./categoria.model";
import { RuoloModel } from "./ruolo.model";

export interface ContrattoModel {
  employeeID: number;

	contrattoID : number;
	dataAssunzione: string;
	ruoloID: RuoloModel;
	stipendio: number;
	categoriaID: CategoriaModel;
	dataDimissione: string | null;
	status: number;
}
