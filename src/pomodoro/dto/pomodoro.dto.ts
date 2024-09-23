import { Priority } from '@prisma/client'
import { Transform } from 'class-transformer'
import { IsString, IsOptional, IsBoolean, IsEnum, IsNumber } from 'class-validator'

export class PomodoroSessionDto {
	@IsOptional()
	@IsBoolean()
	isCompleted?: boolean
}

export class PomodoroRoundDto {
	@IsNumber()
	totalSeconds: number

	@IsOptional()
	@IsBoolean()
	isCompleted?: boolean
}
