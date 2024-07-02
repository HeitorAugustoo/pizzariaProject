import { Request, Response } from "express";
import { ListOrdersSercice } from "../../services/order/ListOrdersService";

class ListOrdersController {
    async handle(req: Request, res: Response){

        const listOrdersService = new ListOrdersSercice();

        const orders = await listOrdersService.execute();

        return res.json(orders);

    }
}

export { ListOrdersController}