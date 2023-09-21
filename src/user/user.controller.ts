import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('registration')
  registerUser(@Body() userDto: UserDto) {
    return this.userService.registerUser(
      userDto as import('../entities/dto/user.dto').UserDto,
    );
  }

  @Post('login')
  loginUser(@Body() userDto: UserDto) {
    return this.userService.loginUser(
      userDto as import('../entities/dto/user.dto').UserDto,
    );
  }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() userDto: UserDto) {
    return this.userService.updateUser(
      id,
      userDto as import('../entities/dto/user.dto').UserDto,
    );
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
