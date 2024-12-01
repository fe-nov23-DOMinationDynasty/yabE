import { UseGuards } from "@nestjs/common";
import { JWTAuthGuard } from "../guards/jwt.guard";

export const Auth = () => UseGuards(JWTAuthGuard);