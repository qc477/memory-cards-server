import { Body, Controller } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }
}
