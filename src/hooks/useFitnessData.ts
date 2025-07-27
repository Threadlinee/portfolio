import { useState, useEffect } from "react";
import { DayData, FoodEntry, ExerciseEntry } from "@/types/fitness";

const STORAGE_KEY = "fitness-tracker-data";
const DEFAULT_GOAL = 2000;

export function useFitnessData() {
	const [data, setData] = useState<DayData[]>([]);

	// Get today's date string
	const getTodayString = () => new Date().toISOString().split("T")[0];

	// Load data from localStorage
	useEffect(() => {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved) {
			try {
				const parsed = JSON.parse(saved);
				setData(parsed);
			} catch (error) {
				console.error("Failed to parse saved data:", error);
			}
		}
	}, []);

	// Save data to localStorage
	const saveData = (newData: DayData[]) => {
		setData(newData);
		localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
	};

	// Get today's data
	const getTodayData = (): DayData => {
		const today = getTodayString();
		return (
			data.find((d) => d.date === today) || {
				date: today,
				foods: [],
				exercises: [],
				goal: DEFAULT_GOAL,
			}
		);
	};

	// Update today's data
	const updateTodayData = (updates: Partial<DayData>) => {
		const today = getTodayString();
		const newData = data.map((d) =>
			d.date === today ? { ...d, ...updates } : d,
		);

		// If today doesn't exist yet, add it
		if (!data.find((d) => d.date === today)) {
			newData.push({
				date: today,
				foods: [],
				exercises: [],
				goal: DEFAULT_GOAL,
				...updates,
			});
		}

		saveData(newData);
	};

	// Add food entry
	const addFood = (food: Omit<FoodEntry, "id" | "timestamp">) => {
		const todayData = getTodayData();
		const newFood: FoodEntry = {
			...food,
			id: Date.now().toString(),
			timestamp: new Date(),
		};

		updateTodayData({
			foods: [...todayData.foods, newFood],
		});
	};

	// Remove food entry
	const removeFood = (foodId: string) => {
		const todayData = getTodayData();
		updateTodayData({
			foods: todayData.foods.filter((f) => f.id !== foodId),
		});
	};

	// Add exercise entry
	const addExercise = (exercise: Omit<ExerciseEntry, "id" | "timestamp">) => {
		const todayData = getTodayData();
		const newExercise: ExerciseEntry = {
			...exercise,
			id: Date.now().toString(),
			timestamp: new Date(),
		};

		updateTodayData({
			exercises: [...todayData.exercises, newExercise],
		});
	};

	// Remove exercise entry
	const removeExercise = (exerciseId: string) => {
		const todayData = getTodayData();
		updateTodayData({
			exercises: todayData.exercises.filter((e) => e.id !== exerciseId),
		});
	};

	// Update daily goal
	const updateGoal = (goal: number) => {
		updateTodayData({ goal });
	};

	// Calculate totals for today
	const todayData = getTodayData();
	const totalCaloriesConsumed = todayData.foods.reduce(
		(sum, food) => sum + food.calories * food.quantity,
		0,
	);
	const totalCaloriesBurned = todayData.exercises.reduce(
		(sum, exercise) => sum + exercise.caloriesBurned,
		0,
	);
	const netCalories = totalCaloriesConsumed - totalCaloriesBurned;
	const caloriesRemaining = todayData.goal - netCalories;

	return {
		todayData,
		totalCaloriesConsumed,
		totalCaloriesBurned,
		netCalories,
		caloriesRemaining,
		addFood,
		removeFood,
		addExercise,
		removeExercise,
		updateGoal,
		allData: data,
	};
}
