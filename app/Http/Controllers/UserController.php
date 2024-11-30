<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Log;
class UserController extends Controller
{
    public function index(){
        return Inertia::render('User/Index',[
            'users' => User::all()
        ]);
    }

    public function create(){
        return Inertia::render('User/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'max:50'],
            'password' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email'],
            'avatar' => ['nullable', 'file', 'image'], //これでもバリデーション可能だが、ファイルのパスを保存するためには下記の処理が必要
        ]);
        if ($request->hasFile('avatar')) {
            // privateになる
            // $path2 =$request->file('avatar')->store('avatars');
            try {
                $file = $request->file('avatar');
                // ユニークなファイル名を生成
                $fileName = uniqid() . '_' . $request->file('avatar')->getClientOriginalName();

                // publicディスクのavatarsディレクトリに保存
                $path = $file->storeAs('avatars', $fileName, 'public');

                if (!$path) {
                    throw new \Exception('ファイルの保存に失敗しました。');
                }

                $validated['avatar_file_path'] = '/storage/' . $path;
            } catch (\Exception $e) {
                Log::error('アバター画像のアップロードに失敗: ' . $e->getMessage());
            }
        }
        //ユーザ登録処理
        User::create($validated);

        $request->session()->put('message','ユーザの作成が完了しました');

        return redirect()->route('user.index');
    }
}
