export interface FoodEntry {
	id: string;
	name: string;
	calories: number;
	quantity: number;
	timestamp: Date;
}

export interface ExerciseEntry {
	id: string;
	name: string;
	caloriesBurned: number;
	duration: number; // in minutes
	timestamp: Date;
}

export interface DailyGoal {
	calorieGoal: number;
	date: string; // YYYY-MM-DD format
}

export interface DayData {
	date: string; // YYYY-MM-DD format
	foods: FoodEntry[];
	exercises: ExerciseEntry[];
	goal: number;
}
